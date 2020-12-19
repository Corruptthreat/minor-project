import React , {useRef,useState} from 'react'
import firebase from 'firebase';
import { Form, Card, Button, Container,Alert} from "react-bootstrap";
import fireDb from '../FirebaseLogin';
import { v4 as uuid } from 'uuid';
import nextId from "react-id-generator";

export default function AdminLogin() {
  const [files, setfile] = useState(null)
  const [cdetail, setcdetails] = useState(null)
  const [title, settitle] = useState(null)
    function handleSubmit(e){
      e.preventDefault()
      console.log(files)
       const file = files;
       const cdetails = cdetail;
       const ctitle = title;
       //e.target.files[0];
        const id = uuid();
        const images = firebase.storage().ref('videos').child(id);
        images.put(file).then(snapshot => {
          return images.getDownloadURL()
          .then(url => {
             // url is the download URL
             var postListRef = fireDb.database().ref('Courses');
             var newPostRef = postListRef.push();
                                                newPostRef.set({
                                                  title : ctitle,
                                                  vurl : url,
                                                  cdetails:cdetails
                           });
                // fireDb.database().ref('Courses').child('videos/')
                // .push({
                //  
                // });
      })
      .catch(error => {
          // deal any errors
          console.log(error)
      })
  })
  var starCountRef = fireDb.database().ref('Courses');
  starCountRef.on('value', (snapshot) =>{
    const data = snapshot.val();
  });
   
}
    return (
        <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "50vh" }}
      >
        <div className="w-100" style={{ maxWidth:"400px"}}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Upload Files</h2>
            
            <Form onSubmit={handleSubmit} >
            <div class="form-group">
              <label for="titleUpload">Title</label>
                <input type='text'  onChange={e => {
                 settitle(e.target.value);
              }} />
             </div>
            <div class="form-group">
            <label for="vUpload">Upload Video</label>
              <input  type='file'  onChange={e => {
                 setfile(e.target.files[0]);
              }} />
              </div>
              <div class="form-group">
              <label for="vUpload">Course Details</label>
                <input type='text'  onChange={e => {
                 setcdetails(e.target.value);
              }} />
             </div>
              <Button  type="submit" className="w-100">
                Upload
              </Button>
            </Form>
          </Card.Body>
        </Card>
         </div>
      </Container>
    )
}
