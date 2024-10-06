import Tarea from "../database/model/Tarea.js";

export const crearTarea = async (req, res) => {
    try {
        const tareaNueva = new Tarea(req.body)
        await tareaNueva.save()
        res.status(201).json({
            mensaje:"La tarea fue creada correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo crear la tarea"
        })
    }
}
export const listarTareas = async (req, res) => {
    try {
        const arrayTareas = await Tarea.find()
        res.status(200).json(arrayTareas)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se encontraron las tareas"
        })
    }
}
export const obtenerTareas = async (req, res) => {
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if (!tareaBuscada) {
        return res.status(404).json({
            mensaje: "la tarea no fue encontrada"
        })
        }
        res.status(200).json(tareaBuscada)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo obtener la tarea"
        })
    }
}
export const borrarTarea = async (req, res) => {
    try {
        req.params.id
        const tareaBuscada = await Tarea.findById(req.params.id)
        if (!tareaBuscada) {
            return res.status(404).json({
                mensaje:"El producto no fue encontrado"
            })
        }
        await Tarea.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:"La tarea fue borrada correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo borrar la tarea"
        })
    }
}
export const editarTarea = async (req,res) => {
    try {
        const tareaBuscada = await Tarea.findById(req.params.id)
        if (!tareaBuscada) {
            return res.status(404).json({
                mensaje:"La tarea no fue encontrada"
            })
        }
        await Tarea.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:"La tarea fue editada correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            mensaje: "Ocurrio un error, no se pudo editar la tarea"
        })
    }
}