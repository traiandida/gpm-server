import directoryTree from "directory-tree";
import path from 'path';


export const getTree = async (req, res ) => {
    try{
        // const tree = directoryTree(__dirname, 'public')
        // console.log(tree);
        console.log(path.basename(__dirname));
        return res.status(200)
    }catch(error){
        res.status(500)
        return res.send(error.message)
    }
}

export const getPath = async (req, res) => {
    
    const { path } = req.params;
    
    try{
        console.log(path);
    }catch(error){
        res.status(500)
        return res.send(error.message)
    }

}