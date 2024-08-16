import { collection, addDoc, getDocs, doc, deleteDoc, updateDoc, query, where } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js"
import {auth ,db} from './config.js'

let allArray = []
async function getData() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
    allArray.push({ ...doc.data(), id: doc.id })
  
    
    // blogArr.push({ ...doc.data(), id: doc.id })

    // console.log(doc.id);
    
    
  });
  // console.log(arr);
  // renderBlog()
 render()
  

}


getData()


function render(){
  allArray.map((allBlogs)=>{
    let display = document.querySelector('.display')
    console.log(allBlogs);
    
  display.innerHTML += ` <p> title ${allBlogs.title}</p>
   <p>  description ${allBlogs.description}</p>
  `

  })
}
