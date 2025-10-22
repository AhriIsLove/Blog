import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// 커스텀 폰트 목록 (Quill에 등록할 폰트 이름)
const fonts = ['Arial', 'Georgia', 'Impact', 'Tahoma', 'Times New Roman', 'Verdana'];

// // Quill 폰트 스타일을 CSS로 직접 정의
// const fontStyles = `
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Arial"]::before,
//   .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Arial"]::before {
//     content: 'Arial';
//     font-family: Arial, sans-serif;
//   }
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Georgia"]::before,
//   .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Georgia"]::before {
//     content: 'Georgia';
//     font-family: Georgia, serif;
//   }
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Impact"]::before,
//   .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Impact"]::before {
//     content: 'Impact';
//     font-family: Impact, Charcoal, sans-serif;
//   }
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Tahoma"]::before,
//   .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Tahoma"]::before {
//     content: 'Tahoma';
//     font-family: Tahoma, Geneva, sans-serif;
//   }
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Times New Roman"]::before,
//   .ql-snow .ql-font .ql-picker.ql-font .ql-picker-item[data-value="Times New Roman"]::before {
//     content: 'Times New Roman';
//     font-family: "Times New Roman", Times, serif;
//   }
//   .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="Verdana"]::before,
//   .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="Verdana"]::before {
//     content: 'Verdana';
//     font-family: Verdana, Geneva, sans-serif;
//   }
// `;

// 커스텀 폰트 등록 (Quill 내 폰트 이름과 매칭)
const Font = ReactQuill.Quill.import('formats/font');
Font.whitelist = fonts;
ReactQuill.Quill.register(Font, true);

function RichTextEditor({ value, onChange }) {
  const [editorValue, setEditorValue] = useState(value);

  const handleChange = (content) => {
    setEditorValue(content);
    onChange(content);
    console.log('에디터 내용 변경:', content);
  };

  useEffect(() => {
    setEditorValue(value);
  }, [value]);

  const modules = {
    toolbar: [
      // [{ font: fonts }],
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ color: [] }, { background: [] }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <>
      {/* 폰트 스타일을 직접 삽입 */}
      {/* <style>{fontStyles}</style> */}
      <ReactQuill
        theme="snow"
        value={editorValue}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        placeholder="내용을 입력하세요..."
      />
    </>
  );
}

export default RichTextEditor;
