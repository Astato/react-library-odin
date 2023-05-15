import React from "react"
import {useState,useEffect} from "react"



const bookArray = [];

class book {
    constructor(title, author, pages, read) {
            this.title = title;
            this.author = author;
            this.pages = pages;
            this.read = read;
    }
}


const Books = () => {
    const [remove, setRemove] = useState(false)
    const [isRead, setIsRead] = useState(false)


    
    useEffect(()=>{
    },[remove,isRead])
    
    const bookItem = bookArray.map((book, index) =>{
        const {title, author,pages} = book
        let {read} = book

        function markAsRead(){
            setIsRead(!isRead)
            if(read === "yes"){
               return bookArray[index].read = "no";
            }
            else{
                return bookArray[index].read="yes";
            }
        }


        return (
        <div id="book-info" key={index}>
            <h4>{title}</h4>
            <p>{author}</p>
            <p>Pages: {pages}</p>
            <p >Read: {read}</p>
            <div id="btn-container">
                <button onClick={()=>{bookArray.splice(index,1); setRemove(!remove)}}>Remove</button>
                <button onClick={()=> markAsRead()}>Mark as Read</button>
            </div>
        </div>
        );
    })
    

    
    return(
        <div id="book-card" >
         {bookItem}
        </div>
    )
}


const Booklist  = ()=>{

    const [title,setTitle] = useState("");
    const [author, setAuthor] = useState("")
    const [pages, setPages] = useState("")
    const [read, setRead] = useState("")
  
    function add(){
    if(pages.length>1 && title.length >5 && author.length>5){
    let newBook = new book(title,author,pages,read)
    const checkforBook = bookArray.map(book => {
        return book.title;
    });

    for(let i of checkforBook){
        if(newBook.title === i){
            alert("Book already saved")
            return;
        }}

    bookArray.push(newBook)

    setTitle("");
    setAuthor("");
    setPages("");
    }
    
    }


    function showForm(){
        const header = document.getElementById("header")
        switch(header.className){
            case "hide-header": return header.setAttribute("class","show-header");
            case "show-header": return header.setAttribute("class","hide-header");
        }

    }
    
    return(
                    <>
        <div className="hide-header" id="header">
            <form>
                <label htmlFor="title">Title:</label>
                <input id="title" type={"text"} value={title} onChange={(e)=>setTitle(e.target.value)} required minLength={'5'} ></input>
                <label htmlFor="author">Author:</label>
                <input id="author" type={"text"} value={author} onChange={(e) => setAuthor(e.target.value)} required minLength={'5'} ></input>
                <label htmlFor="pages">Pages:</label>
                <input id="pages" type={"number"} value={pages} onChange={(e)=> setPages(e.target.value)}required minLength={'1'}  ></input>
                <ul id="radio-buttons">
                    <label htmlFor="read"style={{margin: 'auto', marginRight:'6rem'}}>Read?</label>
                    <li>Yes<input type={"radio"} value="yes" name="read" onClick={(e)=>setRead(e.target.value)}></input></li>
                    <li>No <input type={"radio"} value="no" name="read" onClick={(e)=> setRead(e.target.value)}></input></li>
                </ul>
                <button type="submit" onClick={(e)=>{e.preventDefault(); add() }}>Sumbit</button>
                </form>
                </div>

                    
                <div id="add-btn">
                        <button id="add-button" onClick={()=> showForm()}>Add Book</button>
                    </div>
            <div id="book-cards"> <Books/></div>
            </>
    )

}

export default Booklist;