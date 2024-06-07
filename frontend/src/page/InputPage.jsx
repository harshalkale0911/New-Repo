 
import { Button, Container, FormControl, FormLabel, Input    } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';

const InputPage = () => {
    const [authorName, setAuthorName] = useState('');
    const [title, setTitle] = useState('');
    const [frontCoverImage, setFrontCoverImage] = useState(null);
      const [frontCoverContent] = useState('');
    const [backCoverContent] = useState('');
 
    const url = 'http://localhost:5050';

    const handleAuthorNameChange = (event) => {
        setAuthorName(event.target.value);
    };

    const handleFrontCoverImageChange = (event) => {
        setFrontCoverImage(event.target.files[0]);
    };

  
    

    const handleSave = async () => {
        const formData = new FormData();
        formData.append('authorName', authorName);
        formData.append('title', title);
        formData.append('frontCoverImage', frontCoverImage);
        formData.append('backCoverImage');
         
        formData.append('frontCoverContent', frontCoverContent);
        formData.append('backCoverContent', backCoverContent);
        

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${url}/books`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('PDF generated:', response.data);
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    return (
        <Container >
            <FormControl  >
                <FormLabel>Author Name</FormLabel>
                <Input value={authorName} onChange={handleAuthorNameChange} />
            </FormControl>
            <FormControl  >
                <FormLabel>Title</FormLabel>
                <Input value={title} onChange={(e) => setTitle(e.target.value)} />
            </FormControl>
            <FormControl mb="4">
                <FormLabel>Front Cover Image</FormLabel>
                <Input type="file" onChange={handleFrontCoverImageChange} />
            </FormControl>           
            <FormControl  >       
            </FormControl>
            <br />
            <Button colorScheme="grey" onClick={handleSave}>Save</Button>
        </Container>
    );
}

export default InputPage;
