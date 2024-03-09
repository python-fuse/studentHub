import { useState, useEffect } from "react";
import { collectionGroup, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

const useFetchAllPosts = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const allPostsQuery = collectionGroup(db, "posts");
        const querySnapshot = await getDocs(allPostsQuery);

        let allPosts = [];
        querySnapshot.forEach((doc) => {
          allPosts.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setPosts(allPosts);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again.");
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchAllPosts;
