'use strict'

function Post(author,text,date = Date()){
    this.author = author
    this.text = text
    this.date = date
}

Post.prototype.edit = function(text)  
{
    this.text = text
}

function AttacedPost(author,text,date = Date()){
    Post.call(this, author,text,date)
    this.highlighted = false
}

AttacedPost.prototype = Object.create(Post.prototype)
AttacedPost.prototype.constructor = AttacedPost

/*
Не очень понял про AttacedPost.prototype.constructor = AttacedPost
без присваивания констуктора все работало также
*/

AttacedPost.prototype.makeTextHighlighted = function()  
{
    this.highlighted = true
}


let post_1 = new Post('author_1','my_text')

let post_2 = new AttacedPost('author_2','my_text_attached')

console.log(post_1)

console.log(post_2)

post_1.edit('my_new_text')

post_2.makeTextHighlighted()

console.log(post_1)

console.log(post_2)