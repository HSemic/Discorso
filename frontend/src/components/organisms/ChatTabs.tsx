import React, { useState } from 'react';
import Chat from '../molecules/Chat';

const ChatTabs = (): React.ReactElement => {
  const [firstTabActive, setFirstTabActive] = useState(true);

  const onTabClick = (param: boolean) => {
    setFirstTabActive(param);
  };

  return (
    <>
      <div className="row">
        <div className="chat-tabs">
          <div className="tab-2">
            <label htmlFor="tab2-1">AIML</label>
            <input
              id="tab2-1"
              name="tabs-two"
              type="radio"
              defaultChecked={firstTabActive}
              onClick={() => onTabClick(true)}
            />
            <div>
              <Chat chatType="aiml" />
            </div>
          </div>
          <div className="tab-2">
            <label htmlFor="tab2-2">NLP</label>
            <input
              id="tab2-2"
              name="tabs-two"
              type="radio"
              defaultChecked={!firstTabActive}
              onClick={() => onTabClick(false)}
            />
            <div>
              <Chat chatType="nlp" />
            </div>
          </div>
        </div>
        <div className="col-1-of-4"></div>
      </div>
    </>
  );
};

export default ChatTabs;
