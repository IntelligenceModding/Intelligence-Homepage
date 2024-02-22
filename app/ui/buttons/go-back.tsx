'use client'

export function GoBackButton() {
    const goBack = () => {
        window.history.back();
    }

    return (
        <button onClick={goBack}>
            <span className="absolute inset-0" aria-hidden="true"/>
            Go Back
        </button>
    )
}