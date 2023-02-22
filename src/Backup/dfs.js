const dfs = (start, target) => {
    if (start.type === 'files') {
        // return start;
        return(<File/>)
       
    }
    for (let i = 0; i < start.children.length; i++) {
        var result = dfs(start.children[i], target);
        if (result != null) {
            // return result;
            // return(<Folder/>)
            console.log()
        }
    }