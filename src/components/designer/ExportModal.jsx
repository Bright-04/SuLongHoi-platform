import React, { useState } from 'react';
import useLionDesignStore from '../../store/lionDesignStore';

const ExportModal = ({ isOpen, onClose }) => {
  const { exportDesignAsImage } = useLionDesignStore();
  const [exportSettings, setExportSettings] = useState({
    format: 'png',
    quality: 0.9,
    includeWatermark: true,
    includeInfo: true,
    resolution: '1920x1080'
  });

  const handleExport = () => {
    exportDesignAsImage(exportSettings.format, exportSettings.quality);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="export-modal-overlay">
      <div className="export-modal">
        <div className="export-modal-header">
          <h3>Export Design</h3>
          <button className="close-button" onClick={onClose}>×</button>
        </div>
        
        <div className="export-modal-content">
          <div className="export-option">
            <label>Format:</label>
            <select 
              value={exportSettings.format} 
              onChange={(e) => setExportSettings({...exportSettings, format: e.target.value})}
            >
              <option value="png">PNG (High Quality)</option>
              <option value="jpeg">JPEG (Smaller Size)</option>
            </select>
          </div>

          <div className="export-option">
            <label>Quality:</label>
            <input 
              type="range" 
              min="0.1" 
              max="1" 
              step="0.1"
              value={exportSettings.quality}
              onChange={(e) => setExportSettings({...exportSettings, quality: parseFloat(e.target.value)})}
            />
            <span>{Math.round(exportSettings.quality * 100)}%</span>
          </div>

          <div className="export-option">
            <label>Resolution:</label>
            <select 
              value={exportSettings.resolution} 
              onChange={(e) => setExportSettings({...exportSettings, resolution: e.target.value})}
            >
              <option value="1920x1080">Full HD (1920x1080)</option>
              <option value="1280x720">HD (1280x720)</option>
              <option value="3840x2160">4K (3840x2160)</option>
            </select>
          </div>

          <div className="export-option">
            <label>
              <input 
                type="checkbox" 
                checked={exportSettings.includeWatermark}
                onChange={(e) => setExportSettings({...exportSettings, includeWatermark: e.target.checked})}
              />
              Include Watermark
            </label>
          </div>

          <div className="export-option">
            <label>
              <input 
                type="checkbox" 
                checked={exportSettings.includeInfo}
                onChange={(e) => setExportSettings({...exportSettings, includeInfo: e.target.checked})}
              />
              Include Design Info
            </label>
          </div>
        </div>

        <div className="export-modal-actions">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={handleExport}>
            Export Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportModal; 