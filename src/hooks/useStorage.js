import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/firebase';

const useStorage = (file) => {

    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        // References
        const storageRef = projectStorage.ref(file.name);

        storageRef.put(file).on("state_change", (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err)
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            const imgRef = projectFirestore.collection('images').doc();
            await imgRef.set({url, createdAt})
            setUrl(url);
        })
    }, [file]);
    return { progress, url, error }
}
export default useStorage;