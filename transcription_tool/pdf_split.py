from PyPDF2 import PdfFileWriter, PdfFileReader
import os
from pdf2image import convert_from_path
import gc
title_list = ["0-16-1577-1577-Sherry-A_Treatise_of_the_Figures_of_Grammar_and_Rhetorike.pdf",
"1-16-1582-1582-Mulcaster-The_First_Part_of_the_Elementarie.pdf",
"2-16-1586-1586-Bullokar-Brief_Grammar_of_English.pdf",
"4-16-1596-1596-Coote-The_English_Schoole_Maister.pdf"
]

for title in title_list:
    file_name = os.path.join("transcription_tool",title)
    title = file_name.split("-")[-1].split(".")[0]
    inputpdf = PdfFileReader(open(file_name, "rb"))
    
    for i in range(inputpdf.numPages):
        print(i)
        output = PdfFileWriter()
        output.addPage(inputpdf.getPage(i))
        folder_name = "{}-pages".format(title)
        jpeg_folder_name = "{}-pictures".format(title)
        if not os.path.exists(jpeg_folder_name):
            os.mkdir(jpeg_folder_name)
        if not os.path.exists(folder_name):
            os.mkdir(folder_name)
        file_name = os.path.join(folder_name,"{}.pdf".format(i))
        jpeg_file_name = os.path.join(jpeg_folder_name,"{}.jpg".format(i))
        if not os.path.exists(jpeg_file_name):
            if not os.path.exists(file_name):
                with open(file_name, "wb") as outputStream:
                    output.write(outputStream)
            images = convert_from_path(file_name) 
            for image in images:
                image.save(jpeg_file_name,'JPEG')
        gc.collect()
