const Design_TreeBranch = (margin) => {
    return (
        <div className="relative m-2 inline-block align-middle h-3 w-3">
            {/* 세로선 */}
            <div className="absolute left-0 top-0 h-3 border-2 border-blue-500"
                style={{ borderBottom: 'none', borderRight: 'none', borderTop: 'none' }}></div>
            {/* 가로선 */}
            <div className="absolute left-0 bottom-0 w-3 border-2 border-blue-500"
                style={{ borderTop: 'none', borderLeft: 'none', borderRight: 'none' }}></div>
        </div>
    );
};

export default Design_TreeBranch;