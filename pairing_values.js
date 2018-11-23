/*finding value pairs using associative array*/

const N = parseInt(2); // Number of elements which make up the association table.
const Q = parseInt(4); // Number Q of file names to be analyzed.
INPUT_TABLE = ["html text/html","png image/png"]
INPUT_FILENAMES = ["test.html", "noextension", "portrait.png", "doc.TXT"]

AssocTable={}
for (let i = 0; i < N; i++) {
    var inputs = INPUT_TABLE[i].split(' ');
    const EXT = inputs[0].toLowerCase(); // file extension
    const MT = inputs[1] // MIME type.
    AssocTable[EXT] = MT
}

for (let i = 0; i < Q; i++) {
    var MimeType = null
    const FNAME = INPUT_FILENAMES[i].toLowerCase(); // One file name per line.

    if (/^.*\.[^\.]{1,10}$/i.test(FNAME)){
        var splitFName = FNAME.split(".")
        lastItem = splitFName[splitFName.length-1]
        if (AssocTable.hasOwnProperty(lastItem)){
            MimeType = AssocTable[lastItem]
        }
    }
   MimeType == null ? console.log("UNKNOWN") : console.log(MimeType)
}