import React, { createContext, useState, ReactNode, useContext } from "react";

interface AudioContextType {
  audioFile: File | null;
  setAudioFile: (file: File | null) => void;
  audioFileName:string;
  setAudioFileName: (name: string) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
};

export const AudioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [audioFileName, setAudioFileName] = useState<string>("Annoying_doorbell.mp3");
  return (
    <AudioContext.Provider value={{ audioFile, setAudioFile,audioFileName,setAudioFileName }}>
      {children}
    </AudioContext.Provider>
  );
};
