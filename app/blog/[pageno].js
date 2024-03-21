// pageno.js
"use client"
import React, { useEffect } from 'react';

function PageNo() {
    useEffect(() => {
        const fetchData1 = async () => {
            try {
              const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
              if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
              const data = await response.json();
              setPosts(data);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
      
          fetchData1();
    }, []);

    return (
      <div>[pageno]</div>
    );
}

export default PageNo;
