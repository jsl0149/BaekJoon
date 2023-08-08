class BinaryTree {
    constructor(xPos, node){
        this.xPos = xPos;
        this.node = node;
        this.left = null;
        this.right = null;
    }
    
    insert(xPos, node){
        xPos < this.xPos  ? this.toLeft(xPos, node) : this.toRight(xPos,node);
    }
    
    toLeft(xPos, node){
        this.left ? this.left.insert(xPos,node) : this.left = new BinaryTree(xPos,node);
    }
    
    toRight(xPos, node){
           this.right ? this.right.insert(xPos,node) : this.right = new BinaryTree(xPos,node);
    }
        
}


function solution(nodeinfo) {
    var answer = [[]];
    
    const compare = (a,b)=>{
        if(a[1]===b[1]) return a[0] - b[0];
        return b[1] - a[1];
    }
    
    nodeinfo.forEach((val,idx)=>{
        val.push(idx+1);
    })
    
    nodeinfo.sort(compare);
    
    const bTree = new BinaryTree(nodeinfo[0][0], nodeinfo[0][2]);
    
    for(let i = 1; i<nodeinfo.length; i++){
        bTree.insert(nodeinfo[i][0], nodeinfo[i][2]);
    }
    
    const pre = [];
    const post = [];
    const preorder = (node) => {
        if(!node) return;
        pre.push(node.node);
        preorder(node.left);
        preorder(node.right);
    }
    
    const postorder = (node) => {
        if(!node) return;
        postorder(node.left);
        postorder(node.right);
        post.push(node.node);
    }
    
    preorder(bTree);
    postorder(bTree);
   
    return [pre, post];
}