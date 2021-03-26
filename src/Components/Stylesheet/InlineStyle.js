import React from 'react';
const styles = {
    color: 'blue',
    fontSize: '72px'
}
function InlineStyle() {
    return (
        <div>
            <h2 style={styles}>Inline Styles</h2>
            <h3 style={{ color: 'cyan', fontSize: '44px' }}>Hello World</h3>
        </div>
    )
}
export default InlineStyle;