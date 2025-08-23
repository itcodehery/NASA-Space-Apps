cd ./backend

python -m evenv .

.\Scripts\activate

pip install -r *.txt

uvicorn main:app --reload
