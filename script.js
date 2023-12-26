$(".navbar>img").click(function (){
    $(".menubar").toggleClass("menubarGo");
})

function downloadResume() {
            
    // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
    var resumePath = './SarangMore.pdf';
    
    // Creating an invisible link element
    var link = document.createElement('a');
    link.href = resumePath;
    link.download = 'SarangMore.pdf';

    // Appending the link to the document
    document.body.appendChild(link);

    // Triggering the click event to start the download
    link.click();

    // Removing the link from the document
    document.body.removeChild(link);
}