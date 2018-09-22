import * as React from 'react';

import { Upload as AntUpload, message, Button, Icon } from 'antd';
import { UploadChangeParam } from 'antd/lib/upload';

export interface IProps {
    // name: string;
    // enthusiasmLevel?: number;
}

interface IState {
    // currentEnthusiasm: number;
}

class Upload extends React.Component<IProps, IState> {
    onChange = (info: UploadChangeParam) => {
        if (info.file.status !== 'uploading') {
            // console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            // console.log();
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    }

    beforeUpload = (file: any, FileList: any[]): boolean | PromiseLike<any> => {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = this.onUploaded;

            return true;
    }

    onUploaded = (event: any) => {
        console.log(event.currentTarget.result);
    }

    public render() {
        return (
            <AntUpload
                name="file"
                action="//jsonplaceholder.typicode.com/posts/"
                headers={{authorization: 'authorization-text'}}
                onChange={this.onChange}
                beforeUpload={this.beforeUpload}
            >
                <Button>
                    <Icon type="upload" /> Click to Upload
                </Button>
            </AntUpload>
        );
    }
}

export default Upload;
