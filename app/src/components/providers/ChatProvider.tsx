import { ChatBot } from "../ui";

 

type Props = {
  children: React.ReactNode;
};

const ChatProvider: React.FC<Props> = ({ children }) => {
  return (
    <>
      {children}
      <ChatBot />
    </>
  );
};

export default ChatProvider;
