import React, { useEffect, useState } from "react";



const url =
  "https://gist.githubusercontent.com/garganjohn/4e4b2045c7e938baf9291d934a56b1bf/raw/e7b9dacdbb94a831d53a3676cd42aaef1050ce09/AntarcticBirds.json";
interface Bird {
  family: string;
  members: string[];
}
const App: React.FC = () => {
  const [source, setSource] = useState();
  const [description, setDescription] = useState();
  const [birds, setBirds] = useState<Bird[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSource(data.source);
        setDescription(data.description);
        setBirds(data.birds);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {birds?.map((bird) => {
            return(
              <div>
                <h3>{bird.family}</h3>
                {bird.members.map(mem => {
                  return <p>{mem}</p>
                })}
              </div>
            )
          })}
        </>
      )}
    </>
  );
 
};

export default App;
