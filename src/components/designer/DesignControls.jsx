import React from 'react';
import useLionDesignStore from '../../store/lionDesignStore';

const DesignControls = () => {
  const { design, options, updateDesign, resetDesign, exportDesign } = useLionDesignStore();

  // Debug: Log options to check if backgrounds exist
  console.log('🎨 DesignControls - Available options:', options);
  console.log('🎨 DesignControls - Current design:', design);

  const handleColorChange = (property, value) => {
    updateDesign({ [property]: value });
  };

  const handleOptionChange = (property, value) => {
    updateDesign({ [property]: value });
  };

  const handleToggle = (property) => {
    updateDesign({ [property]: !design[property] });
  };

  const ColorPicker = ({ label, value, onChange, colors }) => (
    <div className="control-group">
      <label>{label}</label>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color.value}
            className={`color-option ${value === color.value ? 'active' : ''}`}
            style={{ backgroundColor: color.value }}
            onClick={() => onChange(color.value)}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );

  const OptionSelector = ({ label, value, onChange, options }) => (
    <div className="control-group">
      <label>{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );

  const ToggleSwitch = ({ label, checked, onChange }) => (
    <div className="control-group">
      <label>{label}</label>
      <div className="toggle-switch">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          id={`toggle-${label.toLowerCase().replace(/\s+/g, '-')}`}
        />
        <label htmlFor={`toggle-${label.toLowerCase().replace(/\s+/g, '-')}`}></label>
      </div>
    </div>
  );

  return (
    <div className="design-controls">
      <div className="controls-header">
        <h3>Design Your Lân Sư</h3>
        <p>Customize every aspect of your digital Lân Sư head</p>
      </div>

      <div className="controls-content">
        {/* Colors Section */}
        <div className="control-section">
          <h4>Colors</h4>
          <ColorPicker
            label="Mane Color"
            value={design.maneColor}
            onChange={(value) => handleColorChange('maneColor', value)}
            colors={options.maneColors}
          />
          <ColorPicker
            label="Eye Color"
            value={design.eyeColor}
            onChange={(value) => handleColorChange('eyeColor', value)}
            colors={options.eyeColors}
          />
          <ColorPicker
            label="Nose Color"
            value={design.noseColor}
            onChange={(value) => handleColorChange('noseColor', value)}
            colors={options.noseColors}
          />
          <ColorPicker
            label="Horn Color"
            value={design.hornColor}
            onChange={(value) => handleColorChange('hornColor', value)}
            colors={options.hornColors}
          />
        </div>

        {/* Style Section */}
        <div className="control-section">
          <h4>Style</h4>
          <OptionSelector
            label="Fur Texture"
            value={design.furTexture}
            onChange={(value) => handleOptionChange('furTexture', value)}
            options={options.furTextures}
          />
          <OptionSelector
            label="Mane Style"
            value={design.maneStyle}
            onChange={(value) => handleOptionChange('maneStyle', value)}
            options={options.maneStyles}
          />
          <OptionSelector
            label="Pattern"
            value={design.pattern}
            onChange={(value) => handleOptionChange('pattern', value)}
            options={options.patterns}
          />
          <OptionSelector
            label="Background"
            value={design.background}
            onChange={(value) => {
              console.log('🎨 Background changed to:', value);
              handleOptionChange('background', value);
            }}
            options={options.backgrounds || []}
          />
        </div>

        {/* Features Section */}
        <div className="control-section">
          <h4>Features</h4>
          <ToggleSwitch
            label="Whiskers"
            checked={design.whiskers}
            onChange={() => handleToggle('whiskers')}
          />
          <ToggleSwitch
            label="Fur"
            checked={design.horns}
            onChange={() => handleToggle('horns')}
          />
        </div>

        {/* Actions Section */}
        <div className="control-section">
          <h4>Actions</h4>
          <div className="action-buttons">
            <button className="btn btn-secondary" onClick={resetDesign}>
              Reset Design
            </button>
            <button className="btn btn-primary" onClick={exportDesign}>
              Export Design
            </button>
          </div>
        </div>

        {/* Design Info */}
        <div className="design-info">
          <h4>Design Info</h4>
          <div className="info-grid">
            <div className="info-item">
              <span>Fur:</span>
              <span style={{ color: design.furColor }}>●</span>
            </div>
            <div className="info-item">
              <span>Mane:</span>
              <span style={{ color: design.maneColor }}>●</span>
            </div>
            <div className="info-item">
              <span>Eyes:</span>
              <span style={{ color: design.eyeColor }}>●</span>
            </div>
            <div className="info-item">
              <span>Nose:</span>
              <span style={{ color: design.noseColor }}>●</span>
            </div>
            <div className="info-item">
              <span>Horns:</span>
              <span style={{ color: design.hornColor }}>●</span>
            </div>
            <div className="info-item">
              <span>Whiskers:</span>
              <span>{design.whiskers ? '✓' : '✗'}</span>
            </div>
            <div className="info-item">
              <span>Horns:</span>
              <span>{design.horns ? '✓' : '✗'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignControls; 