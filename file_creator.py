import os
import openpyxl

xlsx = openpyxl.load_workbook('Grammars.xlsx')

sheet = xlsx.active

values = sheet['A65' : 'C104']

parent_dir = "C:\\Users\\cflow\\heidelgram_tools"
## printing the values of cells
for c1, c2, c3 in values:
    last_name = str(c3.value).split()[-1]
    print(last_name)
    stripped_title = str(c2.value).replace(",","").replace(":","")
    title = "-".join(stripped_title.split())
    grammar_id = str(c1.value)
    directory = grammar_id + "-" + str(19) + "-" + last_name + "-" + title
    path = os.path.join(parent_dir, directory) 
    os.mkdir(path)