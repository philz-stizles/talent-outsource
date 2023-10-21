import { MessagesSquare, X } from "lucide-react";

const ChatBot = () => {
  return (
    <div className="fixed bottom-6 right-6">
      <div className="rounded-lg border border-indigo-300 p-2 z-50 bg-indigo-100 shadow-md cursor-pointer">
        <MessagesSquare size={32} />
      </div>
    </div>
  );
};

export default ChatBot;
