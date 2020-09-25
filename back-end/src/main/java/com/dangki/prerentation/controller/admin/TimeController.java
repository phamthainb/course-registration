package com.dangki.prerentation.controller.admin;

import com.dangki.data.dto.SubjectDto;
import com.dangki.data.dto.TimeDto;
import com.dangki.service.SubjectService;
import com.dangki.service.TimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin/api/time")
public class TimeController {
    @Autowired
    private TimeService timeService;

    @GetMapping
    public ResponseEntity<List<TimeDto>> getTime()
    {
        return ResponseEntity.ok(timeService.findAll());
    }
    @PostMapping
    public ResponseEntity<?> addTime(@RequestBody TimeDto timeDto)
    {
        return ResponseEntity.ok(timeService.add(timeDto));
    }
    @PutMapping
    public ResponseEntity<?> updateTime(@RequestBody TimeDto timeDto)
    {
        return ResponseEntity.ok(timeService.update(timeDto));
    }
    @DeleteMapping
    public void deleteTime(@RequestBody List<TimeDto> timeDtos)
    {
        timeService.delete(timeDtos);
    }
}
