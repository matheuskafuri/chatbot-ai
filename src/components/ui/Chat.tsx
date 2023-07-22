'use client';

import { Input } from "./input";
import { Button } from "./button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { useChat } from "ai/react";
import { ScrollArea } from "./scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    //por padrão já vem setado como '/api/chat', mas pode ser alterado
    api: '/api/chat',
  });
  return (
    <Card className="w-[440px] h-[700px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Bem-vindo ao chat AI, aqui você pode conversar com um assistente virtual.</CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="w-full pr-4 h-[500px]">
          {messages.map((message) => (
            <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
              {message.role === 'user' && (
                <Avatar>
                  <AvatarFallback>MK</AvatarFallback>
                  <AvatarImage src="https://github.com/mkafuri.png" />
                </Avatar>
              )}
              {message.role === 'assistant' && (
                <Avatar>
                  <AvatarFallback>NI</AvatarFallback>
                  <AvatarImage src="https://github.com/nitec.png" />
                </Avatar>
              )}
              <p className="leading-relaxed">
                <span className="block font-bold text-slate-700" >
                  {message.role === 'user' ? 'Usuário' : 'AI'}
                </span>
                {message.content}
              </p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form className="w-full flex gap-x-2" onSubmit={handleSubmit}>
          <Input placeholder="Como poso ajudá-lo?" value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}