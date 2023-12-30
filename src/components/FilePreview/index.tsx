import './style.css'

interface FilePreviewProps {
  parts: any[][]
}

export function FilePreview({ parts } : FilePreviewProps) {
  return (
    <>
      {parts.map(part => 
        <div className="file-part">
          <div className="file-part-row">
            {part.length > 0 ? Object.keys(part[0]).map((propertyName: string | number ) => 
              <span className="property"><em>{propertyName}:</em> {part[0][propertyName].toString()}</span>
            ) : <div></div>}
          </div>
          <div>
            Antal rader: {part.length}
          </div>
        </div>
      )}
    </>
  );
}
