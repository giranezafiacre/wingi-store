import { db, storage } from ".";
import {
    ref,
    uploadBytes,
    getDownloadURL,
} from "firebase/storage";
import {
    collection,
    addDoc
} from "firebase/firestore";


const AddProd = (name, description, price, quantity, category, file) => {
    console.log(file)
    //get your image
    var image = file;

    var imageName = image.name;
    const usersCollectionRef = collection(db, "products");
    const imageRef = ref(storage, `fiacre-brand/${imageName}`);
    uploadBytes(imageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then(async (url) => {
            await addDoc(usersCollectionRef, {
                name: name,
                description: description,
                price: price,
                quantity: quantity,
                category: category,
                imageURL: url
            });
            window.location.href = "http://localhost:3000/add-product"
        });
    });
}
export default AddProd;