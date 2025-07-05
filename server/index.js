//backend-code

const mangoose = require('mongoose')
const Document = require('./Document')

const defaultValue = ""

mangoose.connect("mongodb://localhost:27017/shared-notes", {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});


const io = require('socket.io')(3001, {
    cors: {
        origin: true, // allow all origins (including localhost, Electron, etc.)
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(socket + "connected")

    socket.on("get-document", async documentId => {
        const document = await findOrCreateDocument(documentId)
        socket.join(documentId)
        socket.emit('load-document', document.data)

        socket.on('send-changes', (delta) => {
            socket.broadcast.to(documentId).emit('receive-changes', delta)
        })

        socket.on('save-document', async data => {
            await Document.findByIdAndUpdate(documentId, { data })
        })
    });

    socket.on('disconnect', () => {
        console.log("client disconnected")
    })
})

async function findOrCreateDocument(documentId) {
    if (documentId == null) return;

    const document = await Document.findById(documentId)
    if (document) return document

    return await Document.create({
        _id: documentId,
        data: defaultValue
    })
}