"use client"
import React, { useState } from 'react'
import Md from '../component/md'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import MarkdownEditor from '@uiw/react-markdown-editor'
type Props = {}
const mdStr = `# This is a H1  \n## This is a H2  \n###### This is a H6`;
import MDEditor from '@uiw/react-md-editor';
const Page = (props: Props) => {
    const [value, setvalue] = useState("");
    return (
        <div>
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
                        <MDEditor.Markdown source={value}  />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    )
}

export default Page