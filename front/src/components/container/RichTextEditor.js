import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function RichTextEditor({ initialData, onChange }) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={initialData || "<p>여기에 글을 작성하세요!</p>"}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange(data); // 부모 컴포넌트로 변경된 HTML 내용 전달
        }}
        config={{
          licenseKey: 'GPL', // 개발 환경용 라이센스 키 추가!
          // 다른 설정들...
        }}
      />
    </div>
  );
}
export default RichTextEditor;