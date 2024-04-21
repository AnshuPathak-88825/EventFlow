"use client"
import React, { useState } from 'react';
import MarkdownEditor from '@uiw/react-markdown-editor';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
import MDEditor from '@uiw/react-md-editor';

const Md = ({value,setvalue}) => {
  return (
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={50}>
        <MarkdownEditor
          value={mdStr}
          onChange={(value, viewUpdate) => {
            setvalue(value)
          }}

          enablePreview={false}

        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel>
        <div className="container">
          <MDEditor.Markdown source={value} />
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>


  )
};

export default Md;