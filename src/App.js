import React, { useState } from "react";
import axios from "axios";
import "./.env";

const App = () => {
  const [data, setData] = useState(null);
  const newsApiKey = process.env.NEWS_API_KEY;
  const onClick = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${newsApiKey}`
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={150}
          cols={150}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
};

export default App;
