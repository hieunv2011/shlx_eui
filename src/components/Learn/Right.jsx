import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { EuiPinnableListGroup } from "@elastic/eui";
import Chatbox from "./Chatbox";

export const part1 = [
  { label: "Phương tiện giao thông" },
  { label: "Quy định tốc độ" },
  { label: "Điều kiện lái xe" },
  { label: "Hành vi bị nghiêm cấm" },
  { label: "Độ tuổi và sức khỏe" },
  { label: "Trách nhiệm bảo trì" },
  { label: "Xử phạt vi phạm" },
];

const Right = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const part1Ref = useRef(null);
  const chatboxRef = useRef(null);
  const [part1Height, setPart1Height] = useState(0);
  const [chatboxHeight, setChatboxHeight] = useState(0);

  useEffect(() => {
    if (part1Ref.current) {
      setPart1Height(part1Ref.current.scrollHeight);
    }
    if (chatboxRef.current) {
      setChatboxHeight(chatboxRef.current.scrollHeight);
    }
  }, [isOpen, isChatOpen]);

  const togglePart1 = () => {
    setIsOpen(!isOpen);
    setIsChatOpen(false);
  };

  const toggleChatbox = () => {
    setIsChatOpen(!isChatOpen);
    setIsOpen(false);
  };
  

  return (
    <div className="flex flex-col">
      <div className="bg-white p-4 rounded-md shadow-md">
        <button
          onClick={togglePart1}
          className="text-lg font-bold w-full text-left"
        >
          Chương 1: Những quy định chung
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isOpen ? part1Height : 0,
            opacity: isOpen ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div ref={part1Ref}>
            <EuiPinnableListGroup
              listItems={part1}
              onPinClick={() => {}}
              maxWidth="none"
              color="subdued"
              gutterSize="none"
              size="s"
            />
          </div>
        </motion.div>
      </div>

      {/* Chatbox dính ở dưới cùng của màn hình */}
      <div className="bg-[#131217] p-2 rounded-md shadow-md fixed bottom-8 right-0 w-full max-w-lg">
        <button
          onClick={toggleChatbox}
          className="text-lg font-bold w-full text-left text-white p-2"
        >
          Hỗ trợ
        </button>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: isChatOpen ? chatboxHeight : 0,
            opacity: isChatOpen ? 1 : 0
          }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden"
        >
          <div ref={chatboxRef}>
            {isChatOpen && <Chatbox />}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Right;
