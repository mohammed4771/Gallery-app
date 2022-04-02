import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { useState } from 'react';
import { motion } from "framer-motion"


const ImgGrid = ({setSelectedImg}) => {
    const {docs } = useFirestore('images');

    return (
        <div className="img-grid">
            {
                docs && docs.map(doc => (
                    <motion.div 
                        layout
                        whileHover={{ opacity: 1}}
                        className="img-wrap" 
                        key={doc.id}
                        onClick={() => setSelectedImg(doc.url)}
                    >
                        <motion.img src={doc.url} alt="uploaded pic"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1}}
                        />
                    </motion.div>
                ))
            }
        </div>
    );
}
 
export default ImgGrid
