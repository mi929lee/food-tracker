import React from 'react'

const FileUpload = () => {
    
    return (
        <div className="control mb-5">
            <label className="label">image</label>
            <div className="file">
                <label className="file-label">
                    <input type="file" className="file-input" />
                    <span className="file-cta">
                        <span className="file-icon">
                            {/* <i className="fas fa-upload"></i> */}
                        </span>
                        <span className="file-label">select an image</span>
                    </span>
                </label>
            </div>
        </div>
        
    )
}

export default FileUpload;