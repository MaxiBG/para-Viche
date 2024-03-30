from flask import Flask, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Configura CORS para permitir todas las solicitudes

@app.route('/switch', methods=['POST'])
def switch():
    if request.method == 'POST':
        data = request.json
        status = data['status']
        
        print("Se recibió una solicitud POST en la ruta /switch")
        print("Datos recibidos:", data)
        
        if status == 'on':
            print("Encendiendo dispositivo en COM3")
        else:
            print("Apagando dispositivo en COM3")
        
    return '', 204

if __name__ == '__main__':
    app.run(debug=True)