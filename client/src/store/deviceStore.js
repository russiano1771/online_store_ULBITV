import {makeAutoObservable} from "mobx";

export default class DeviceStore{
    constructor() {
        this._types = [

        ]
        this._brands = [

        ]
        this._devices = [

        ]
        this._selectedType = {}
        this._selectedBrand = {}
makeAutoObservable(this)
    }
    setTypes(type){
        this._types = type
    }
    setBrands(brand){
        this._brands = brand
    }
    setDevices(device){
        this._devices = device
    }
    setSelectedType(type){
        this._selectedType = type
    }
    setSelectedBrand(brand){
        this._selectedBrand = brand
    }
    get selectedType(){
        return this._selectedType
    }
    get selectedBrand(){
        return this._selectedBrand
    }
    get types(){
        return this._types
    }
    get brands(){
        return this._brands
    }
    get devices(){
        return this._devices
    }
}