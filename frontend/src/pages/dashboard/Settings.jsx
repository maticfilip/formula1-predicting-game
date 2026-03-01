function Settings() {
    return (
        <div className="container-fluid">

            {/* PAGE TITLE */}
            <h2 className="mb-4">Settings</h2>

            <div className="row g-4">
                <div className="col-md-8">

                    {/* CHANGE USERNAME */}
                    <div className="card p-4 mb-4">
                        <h3 className="mb-4">Change Username</h3>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>Current Username</label>
                            <input type="text" className="form-control form-input" value="maticfilip" readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>New Username</label>
                            <input type="text" className="form-control form-input" placeholder="Enter new username" />
                        </div>
                        <button className="btn-primary">Save Username</button>
                    </div>

                    {/* CHANGE EMAIL */}
                    <div className="card p-4 mb-4">
                        <h3 className="mb-4">Change Email</h3>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>Current Email</label>
                            <input type="email" className="form-control form-input" value="matic@example.com" readOnly />
                        </div>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>New Email</label>
                            <input type="email" className="form-control form-input" placeholder="Enter new email" />
                        </div>
                        <button className="btn-primary">Save Email</button>
                    </div>

                    {/* CHANGE PASSWORD */}
                    <div className="card p-4 mb-4">
                        <h3 className="mb-4">Change Password</h3>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>Current Password</label>
                            <input type="password" className="form-control form-input" placeholder="Enter current password" />
                        </div>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>New Password</label>
                            <input type="password" className="form-control form-input" placeholder="Enter new password" />
                        </div>
                        <div className="mb-3">
                            <label className="text-muted mb-2" style={{fontSize: '0.85rem'}}>Confirm New Password</label>
                            <input type="password" className="form-control form-input" placeholder="Confirm new password" />
                        </div>
                        <button className="btn-primary">Save Password</button>
                    </div>

                    {/* DELETE ACCOUNT */}
                    <div className="card p-4" style={{border: '1px solid #3a0a0a'}}>
                        <h3 className="mb-2" style={{color: '#e8002d'}}>Delete Account</h3>
                        <p className="text-muted mb-4" style={{fontSize: '0.9rem'}}>
                            This action is permanent and cannot be undone. All your predictions, scores and league data will be lost.
                        </p>
                        <button 
                            className="btn-outline" 
                            style={{borderColor: '#e8002d', color: '#e8002d', maxWidth: '200px'}}
                        >
                            Delete My Account
                        </button>
                    </div>

                </div>

                {/* PROFILE SUMMARY SIDEBAR */}
                <div className="col-md-4">
                    <div className="card p-4 text-center">
                        <div 
                            className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                            style={{
                                width: '80px', 
                                height: '80px', 
                                borderRadius: '50%', 
                                backgroundColor: '#1a1a1a',
                                border: '2px solid #e8002d',
                                fontSize: '1.75rem',
                                fontWeight: 700,
                                color: '#e8002d'
                            }}
                        >
                            M
                        </div>
                        <h3 className="mb-1">maticfilip</h3>
                        <p className="text-muted mb-3" style={{fontSize: '0.85rem'}}>matic@example.com</p>
                        <hr style={{borderColor: '#222'}} />
                        <div className="d-flex justify-content-between mt-3">
                            <div className="text-center">
                                <p className="text-red mb-0" style={{fontWeight: 700, fontSize: '1.25rem'}}>87</p>
                                <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>POINTS</p>
                            </div>
                            <div className="text-center">
                                <p className="text-red mb-0" style={{fontWeight: 700, fontSize: '1.25rem'}}>#2</p>
                                <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>LEAGUE RANK</p>
                            </div>
                            <div className="text-center">
                                <p className="text-red mb-0" style={{fontWeight: 700, fontSize: '1.25rem'}}>12</p>
                                <p className="text-muted mb-0" style={{fontSize: '0.75rem'}}>PREDICTIONS</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings