1. Outline of the steps I took in taking a software component from concept to deployment:

    #### A document generation service for creating PDF loan agreements from loan proposal and other data
    
    Discuss needs and requirements and demonstrate current software progress and features with stakeholders throughout the project life cycle:
    - Product owner - my boss  
        - provided initial brief and strategy and business integration guidance and requirements 
    - Devops Engineer
        - hosting, data and networking requirements with regard to:   
            - Docker: containerised project managed with Rancher
            - Hosted across 4 AWS EC2 instances
            - Express server frontend: accessed via KONG gateway/ load balancer  
            - Mongo databases and access to other REST APIs
            - SharePoint (widely used in the business) for template storage and completed document hosting  
            - Greylog for capturing software logs
    - Team developers  
        - software structure  
        - house style  
        - code review and pair programming  
    - Compliance Team  
        - the service generates legal documents that need to be correct  


2. A significant decision taken to solve a technical problem, including technologies chosen and why I chose them:

    #### PDF Form processing

    I investigated several NPM libraries for processing PDF forms in NodeJS but they all fell short. They either did not create nice looking forms due to poor font or form concatenation support, or did not handle metadata very well, especially with regard to custom metadata. I also discovered that Adobe Acrobat and third party PDF readers read their metadata from different parts of the underlying PDF document, and to work at their best in all readers both metadata systems need to be used.

    I settled on using a combination of 3 Unix command line tools:
    - PDFtk: 
        - https://www.pdflabs.com/tools/pdftk-server/
        - Filling out PDF forms
        - Adding custom metadata
        - Concatenating PDF documents
    - ExifTool
        - https://www.sno.phy.queensu.ca/~phil/exiftool/
        - Adding standard metadata so that it shows up properly in all PDF readers
    - QPDF
        - http://qpdf.sourceforge.net
        - Postprocessing PDFs to remove unused metadata due to security concerns
        - recompress final PDF
        - enable fast web view

3. How I ensured that the software was fit for purpose and of high quality, what I learnt and what I would do differently next time to do a better job:

    #### Ensuring quality

    - Written with small functions that could easily be tested in isolation and built up into more complex business logic
    - Entry, exit and error logging for each function
    - Integration testing
        - reference documents produced and manually checked for compliance, then converted to JSON
        - new documents produced and converted to JSON
        - new and reference document compared automatically
    - Regular code reviews were carried out to ensure that the code was of acceptable quality and could be supported by my team members
    - Regular feature and process flow reviews were carried out with the product owner.

    #### What I learnt and would do differently next time
    The requirements regularly changed through the course of the project, and I did not always make the code flexible enough to accommodate changes easily. In future, I would organise even more regular feature and process flow reviews and ask more questions! I would also communicate my ideas better by, for example, using more flow diagrams.
