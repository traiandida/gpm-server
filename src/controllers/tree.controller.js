import directoryTree from "directory-tree";
import config from '../config'
import path from 'path'

export const getPath = async (req, res ) => {

    const url = req.params[0]

    let fullPath = (url === undefined) ? config.folder : path.join(config.folder , url)

    try{        
        const directory = path.resolve(fullPath)
        const tree = directoryTree(directory, {attributes: ["size", "type", "extension"]});

        if (tree === null) {
            return res.sendStatus(404);
        }

        if(tree.type !== 'directory') {
            return res.download(tree.path)
        }

        return res.json(tree)
    }catch(error){
        return res.sendStatus(500);
    }
}
