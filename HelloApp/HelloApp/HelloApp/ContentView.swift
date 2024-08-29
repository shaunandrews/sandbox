import SwiftUI
import AVFoundation

struct ContentView: View {
    @ObservedObject var audioRecorder = AudioRecorder()
    
    var body: some View {
        // Calculate a color based on the sound level
        let color = Color(white: 1.0 - audioRecorder.soundLevel)
        
        return Text("Hello")
            .frame(maxWidth: .infinity, maxHeight: .infinity)
            .background(color)
            .foregroundColor(.black)
            .onAppear {
                // Start monitoring when the view appears
                self.audioRecorder.startMonitoring()
            }
            .onDisappear {
                // Stop monitoring when the view disappears
                self.audioRecorder.stopMonitoring()
            }
    }}

extension Color {
    static var random: Color {
        return Color(
            red: Double.random(in: 0...1),
            green: Double.random(in: 0...1),
            blue: Double.random(in: 0...1)
        )
    }
}

class AudioRecorder: ObservableObject {
    private var audioRecorder: AVAudioRecorder!
    private var timer: Timer?
    private let audioSession = AVAudioSession.sharedInstance()
    
    @Published var soundLevel: Double = 0.0

    init() {
        setupRecorder()
        startMonitoring()
    }
    
    func setupRecorder() {
        let recordingSettings = [AVFormatIDKey: kAudioFormatAppleLossless,
                                 AVEncoderAudioQualityKey: AVAudioQuality.max.rawValue,
                                 AVEncoderBitRateKey: 320000,
                                 AVNumberOfChannelsKey: 2,
                                 AVSampleRateKey: 44100.2] as [String : Any]
        
        do {
            let url = URL(fileURLWithPath: "/dev/null")
            audioRecorder = try AVAudioRecorder(url: url, settings: recordingSettings)
            audioRecorder.isMeteringEnabled = true
            audioRecorder.prepareToRecord()
            // We don't actually record audio to a file, so we start and then immediately pause the recorder.
            audioRecorder.record()
            audioRecorder.pause()
        } catch {
            // Handle the error, perhaps by showing an alert to the user
            print("Could not set up the audio recorder:", error)
        }
    }
    
    func startMonitoring() {
        // Start recording in order to monitor the sound level
        audioRecorder.record()
        
        // Set up a timer to update the sound level
        timer = Timer.scheduledTimer(withTimeInterval: 0.1, repeats: true) { [weak self] _ in
            self?.audioRecorder.updateMeters()
            self?.soundLevel = Double(self?.audioRecorder.averagePower(forChannel: 0) ?? 0.0)
            // The average power level is logarithmic, ranging from -160 to 0 dB, where 0 dB is the maximum level.
            // Convert the dB level to a linear scale to use it for the UI color adjustment.
            let linearLevel = min(max(0, (self?.soundLevel ?? 0) + 160) / 160, 1)
            self?.soundLevel = linearLevel
        }
    }
    
    func stopMonitoring() {
        timer?.invalidate()
        audioRecorder.stop()
        try? audioSession.setActive(false)
    }


}


struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
