import { useAudio } from "@/state/audio/AudioContext";
import React, { useState } from "react";

const AudioUploader: React.FC = () => {
  const { setAudioFile,setAudioFileName,audioFileName } = useAudio();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setAudioFile(file);
      setAudioFileName(file.name);
    }
  };

  return (
    <div className="w-full px-0 flex flex-col items-center sm:flex-row sm:justify-between">
      <label htmlFor="audio-upload" className="bg-indigo1 text-black font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
      <h3 className="uppercase text-white">Upload Alarm</h3>

      </label>
      <input
        id="audio-upload"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <button className="mt-2  text-black font-bold py-2 px-4 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
  {audioFileName }
</button>
    </div>
  );
};

export default AudioUploader;
