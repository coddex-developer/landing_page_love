function ObserverEffect(elementsParams: NodeListOf<Element>) {
    
    const intersectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
    });
    elementsParams.forEach(ev => intersectionObserver.observe(ev));
}

export default ObserverEffect;