import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './styles.css';

function PostEditor({ onChange, initialValue }) {
  const [markdown, setMarkdown] = useState(initialValue || '');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setMarkdown(newValue);
    onChange(newValue);
  };

  return (
    <div className="markdown-editor">
      <div className="editor-container">
        <textarea
          className="markdown-input"
          value={markdown}
          onChange={handleChange}
          placeholder="Write your post in Markdown..."
        />
        <div className="markdown-preview">
          <ReactMarkdown 
            children={markdown}
            remarkPlugins={[remarkGfm]}
            components={{
              // Opcional: customização de componentes
              p: ({ children }) => <p className="markdown-paragraph">{children}</p>,
              h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
              h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
              code: ({ node, inline, className, children, ...props }) => (
                <code className={`${className} markdown-code`} {...props}>
                  {children}
                </code>
              )
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PostEditor;