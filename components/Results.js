import Thumbnails from "./Thumbnails";
import FlipMove from 'react-flip-move';

function Results({results}) {
    return (
        // Responsive movie card layout using css grid for mobile 
        // first and biger sceen breakpoints and css flex box(3xl) for 4k screens
        <FlipMove className="px-5 py-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
         3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnails key={result.id} result={result} />
            ))
            }
        </FlipMove>
    )
}

export default Results;
