// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// const apiKey = 'AIzaSyBegmeFS1N61KhkWrkG_UwzmcJePtwuXuQ';
// const apiUrl = 'https://www.googleapis.com/youtube/v3';
// const channelID = 'UChVzP7gNOlkymoo000Y9_6Q';
// const playlistID = 'PLI7xwGSSw_fIRv8Q4nz77IqgqhRxTBbBW';

// const Podcast = () => {
//     const [podcastPlaylist, setPodcastPlaylist] = useState([]);
//     useEffect(() => {
//         const getPodcast = async () => {
//             try {
//                 const response = await axios.get(`${apiUrl}/playlists?key=${apiKey}&part=snippet&id=${playlistID}&maxResults=25`);
//                 console.log(response.data);
//                 setPodcastPlaylist(response.data.items);  // Assuming you want to log the response data
//             } catch (error) {
//                 console.error('Error fetching podcasts:', error);
//             }
//         };

//         // Call the function
//         getPodcast();
//     }, []); // Empty dependency array to run the effect only once

//     return (
//         <div>
//             <h3>Podcasts</h3>
//             <ul>
//                 {podcastPlaylist.map((playlist) => (
//                     <li key={playlist.id}>
//                         <img
//                             src={playlist.snippet.thumbnails.default.url}
//                             alt={playlist.snippet.title}
//                         />
//                         <p>{playlist.snippet.title}</p>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Podcast;
