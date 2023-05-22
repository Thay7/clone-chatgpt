"use client"

import { ChatArea } from "@/components/ChatArea";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";

const Page = () => {
  const [sidebarOpened, setSidebarOpened] = useState(false);

  const openSidebar = () => setSidebarOpened(true);
  const closeSidebar = () => setSidebarOpened(false);


  const handleClearConversations = () => {

  }

  const handleNewChat = () => {

  }

  return (
    <main className="flex min-h-screen bg-gpt-gray">
      <Sidebar
        open={sidebarOpened}
        onClose={closeSidebar}
        onClear={handleClearConversations}
        onNewChat={handleNewChat}
      >
      </Sidebar>
      <section className="flex flex-col w-full">

        <Header
          openSidebarClick={openSidebar}
          title={`BALA BLA VLA`}
          newChatClick={handleNewChat}
        />

        <ChatArea
        
        />

      </section>
    </main>
  )
};

export default Page;